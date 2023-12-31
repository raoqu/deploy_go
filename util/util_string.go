package util

import (
	"io"
	"reflect"
	"runtime"
	"strconv"
	"strings"

	"golang.org/x/text/encoding/simplifiedchinese"
	"golang.org/x/text/transform"

	"github.com/saintfish/chardet"
)

func TrimString(s string) string {
	return strings.Trim(Stringlize(s), " 	")
}

func Stringlize(obj interface{}) string {
	switch reflect.TypeOf(obj).Kind() {
	case reflect.String:
		return obj.(string)
	case reflect.Int:
		return strconv.Itoa(obj.(int))
	default:
		return ""
	}
}

func String2int(str string) int {
	if len(str) > 0 {
		num, _ := strconv.Atoi(str)
		return num
	}
	return 0
}

func StringToArray(str string, seprate string) []string {
	strSlice := strings.Split(str, ",")
	resultSlice := make([]string, len(strSlice))
	for i, s := range strSlice {
		resultSlice[i] = TrimString(s)
	}
	return resultSlice
}

func ToCamelCase(s string) string {
	words := strings.Split(s, "_")

	for i := 1; i < len(words); i++ {
		words[i] = strings.Title(words[i])
	}

	result := strings.Join(words, "")

	return result
}

func DetectEncoding(s string) (string, error) {
	detector := chardet.NewTextDetector()
	result, err := detector.DetectBest([]byte(s))
	if err != nil {
		return "", err
	}
	return result.Charset, nil
}

func Utf8(s string) string {
	if runtime.GOOS == "windows" {
		str, err := Gbk2Utf8(s)
		if err == nil {
			return str
		}
	}

	return s
}

func Gbk2Utf8(s string) (string, error) {
	reader := transform.NewReader(
		io.NopCloser(strings.NewReader(s)),
		simplifiedchinese.GBK.NewDecoder(),
	)

	utf8Bytes, err := io.ReadAll(reader)
	if err != nil {
		return "", err
	}

	return string(utf8Bytes), nil
}
func ReplaceTemplate(template string, values map[string]string) string {
	for key, value := range values {
		placeholder := "${" + key + "}"
		template = strings.Replace(template, placeholder, value, -1)
	}
	return template
}

func GetPairedValue(s, key string) string {
	pairs := strings.Split(s, ";")
	for _, pair := range pairs {
		kv := strings.Split(pair, "=")
		if len(kv) == 2 && kv[0] == key {
			return kv[1]
		}
	}
	return ""
}
