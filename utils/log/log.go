package log

import (
	"fmt"
	"os"
	"time"
)

func Add(line, message string) {
	if _, err := os.Stat("./logs"); os.IsNotExist(err) {
		os.Mkdir("./logs", os.ModePerm)
	}

	t := time.Now()
	date := t.Format("2006-01-02")

	os.OpenFile("./logs/"+date+".txt", os.O_RDONLY|os.O_CREATE, 0666)

	f, err := os.OpenFile("./logs/"+date+".txt", os.O_APPEND|os.O_WRONLY, 0666)
	if err != nil {
		fmt.Printf(err.Error())
	}

	defer f.Close()

	if _, err = f.WriteString(t.Format("2006-01-02 15:04:05") + " " + line + " " + message + "\r\n"); err != nil {
		fmt.Printf(err.Error())
	}
}
