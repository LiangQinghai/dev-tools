package api

import "dev-tools/internal"

func init() {
	internal.Register(NewGreetingApi())
}
