package problem0434

import (
	"fmt"
	"testing"

	"github.com/stretchr/testify/assert"
)

// tcs is testcase slice
var tcs = []struct {
	s   string
	ans int
}{

	{"", 0},

	{" Hello, my name is John", 5},

	{"Hello, my name is John", 5},

	// 可以有多个 testcase
}

func Test_countSegments(t *testing.T) {
	ast := assert.New(t)

	for _, tc := range tcs {
		fmt.Printf("~~%v~~\n", tc)
		ast.Equal(tc.ans, countSegments(tc.s), "输入:%v", tc)
	}
}

func Benchmark_countSegments(b *testing.B) {
	for i := 0; i < b.N; i++ {
		for _, tc := range tcs {
			countSegments(tc.s)
		}
	}
}
