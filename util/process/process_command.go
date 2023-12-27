package process

type Command struct {
	Command string `json:"command"`
	Dir     string `json:"dir"`
	Id      string `json:"id"`
}
