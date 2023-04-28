package api

import (
	"fmt"
	"github.com/shirou/gopsutil/cpu"
	"time"
)

type GreetingApi struct {
}

func NewGreetingApi() *GreetingApi {
	return &GreetingApi{}
}

func (api *GreetingApi) SayHello(msg string) string {
	return msg + " this is a greeting message"
}

func (api *GreetingApi) CpuUsage() string {
	percent, err := cpu.Percent(time.Second, false)
	if err != nil {
		return err.Error()
	}
	return fmt.Sprintf("%f", percent[0])
}
