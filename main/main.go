package main

import (
	"io/ioutil"
	"net/http"
	"os"

	"../utils/code"
	"../utils/log"
)

type serveProtected struct {
	fs http.FileSystem
}

func (fs serveProtected) Open(name string) (http.File, error) {
	f, err := fs.fs.Open(name)
	if err != nil {
		return nil, err
	}
	return neuteredReaddirFile{f}, nil
}

type neuteredReaddirFile struct {
	http.File
}

func (f neuteredReaddirFile) Readdir(count int) ([]os.FileInfo, error) {
	return nil, nil
}

func main() {
	prefix := "/medisante"

	http.Handle(prefix+"/static/", cached(serveStatic("./files/www/app/build/", prefix+"/")))
	http.HandleFunc(prefix, index)

	http.ListenAndServe(":3031", nil)
}

func index(w http.ResponseWriter, r *http.Request) {
	go log.Add(code.CodeLine(), "Someone has entered here.")

	var body, _ = ioutil.ReadFile("./files/www/app/build/index.html")
	w.Header().Set("Content-Type", "text/html")
	w.Write(body)
}

func serveStatic(path, prefix string) http.Handler {
	indexFiles := serveProtected{http.Dir(path)}
	return http.StripPrefix(prefix, http.FileServer(indexFiles))
}

func cached(h http.Handler) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Cache-Control", "max-age=2592000")
		h.ServeHTTP(w, r)
	}
}
