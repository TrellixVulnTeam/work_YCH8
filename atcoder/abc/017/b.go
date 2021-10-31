
package main

import (
	"bufio"
	"os"
	"strconv"
  "fmt"
)

var sc, wr = bufio.NewScanner(os.Stdin), bufio.NewWriter(os.Stdout)

func ns() string { sc.Scan(); return sc.Text()}
func nr() []rune { return []rune(ns()) }
func ni() int { a, _ := strconv.Atoi(ns()); return a}
func ni64() int64 { a, _ := strconv.ParseInt(ns(), 10, 64); return a}
func nf() float64 { a, _ := strconv.ParseFloat(ns(), 64); return a}
func nis(n int) []int {a := make([]int, n);for i:=0;i<n;i++ {a[i] = ni()};return a}

func main() {
	defer wr.Flush()
	sc.Split(bufio.ScanWords)
	sc.Buffer(make([]byte, 1001), 1001001)
 
  x := ns()
  s:=[]string{"c","h","o","k","u"}
  for i:=0;i<len(x);i++ {
    for i:=0;i<5;i++ {
      if x[i:i+1]!=s[i] {
        fmt.Println("NO")
        os.Exit(0)
      }
      if i>=1 && x[i:i+1] == "h" && x[i-1:i] != "c" {
        fmt.Println("NO")
        os.Exit(0)
      }
    }
  }
  fmt.Println("YES")
}
