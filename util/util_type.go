package util

import (
	"reflect"
	"strings"
)

var STRING_TYPE = reflect.TypeOf("")

// Make a new type from a string array
//
// e.g. {"a", "b", "c", "d} -->
//
//	struct {
//		  A string `json:"a"`
//		  B string `json:"b"`
//		  C string `json:"c"`
//		  D string `json:"d"`
//		}
func MakeNewType(titles []string) reflect.Type {
	fields := []reflect.StructField{}
	for _, val := range titles {
		title := TrimString(val)
		camelTitle := ToCamelCase(title)
		if len(title) > 0 {
			fields = append(fields, reflect.StructField{
				Name: strings.Title(camelTitle),
				Type: STRING_TYPE,
				Tag:  reflect.StructTag(`json:"` + camelTitle + `" title:"` + title + `"`),
			})
		}
	}

	newType := reflect.StructOf(fields) // make a struct type
	return newType
}
