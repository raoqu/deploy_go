package util

type GeneralArray[T interface{}] []T

// Filter Array
func (arr GeneralArray[T]) Filter(fn func(T) bool) GeneralArray[T] {
	var filtered GeneralArray[T]
	for _, val := range arr {
		if fn(val) {
			filtered = append(filtered, val)
		}
	}
	return filtered
}

// Clone Array
func (arr GeneralArray[T]) Clone() GeneralArray[T] {
	newArray := make(GeneralArray[T], 0)
	return append(newArray, arr...)
}

// Sort array
func (arr GeneralArray[T]) Sort(less func(T, T) bool) {
	for i := range arr {
		for j := i + 1; j < len(arr); j++ {
			if less(arr[j], arr[i]) {
				arr[i], arr[j] = arr[j], arr[i]
			}
		}
	}
}
