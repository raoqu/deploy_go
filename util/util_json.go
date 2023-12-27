package util

import (
	"encoding/json"
	"fmt"
	"reflect"
)

func UnmarshalJSON(jsonString string, v interface{}) error {
	if reflect.ValueOf(v).Kind() != reflect.Ptr {
		return fmt.Errorf("v must be a pointer to a struct")
	}

	err := json.Unmarshal([]byte(jsonString), v)
	if err != nil {
		return err
	}
	return nil
}

func UnmarshalJSONArray(jsonStrings []string, v interface{}) error {
	vValue := reflect.ValueOf(v)
	if vValue.Kind() != reflect.Ptr || vValue.Elem().Kind() != reflect.Slice {
		return fmt.Errorf("v must be a pointer to a slice")
	}

	sliceType := vValue.Elem().Type().Elem()
	if sliceType.Kind() != reflect.Struct {
		return fmt.Errorf("elements of the slice must be structs")
	}

	slice := vValue.Elem()
	for _, jsonString := range jsonStrings {
		elementPtr := reflect.New(sliceType)
		err := json.Unmarshal([]byte(jsonString), elementPtr.Interface())
		if err != nil {
			return err
		}
		slice.Set(reflect.Append(slice, elementPtr.Elem()))
	}

	return nil
}
