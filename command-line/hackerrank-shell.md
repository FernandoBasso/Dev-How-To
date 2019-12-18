# HackerRank Shell
[TOC]

## Intro
Unless otherwise noted, assume all scripts contain the following shebang:

```
#!/usr/bin/env bash
```


## Easy Challenges
https://www.hackerrank.com/domains/shell



### Let's Echo
Tags: #cmdline #shell #bash #echo #printf
Links: [challenge](https://www.hackerrank.com/challenges/bash-tutorials-lets-echo)

```shell-session
$ echo HELLO

$ printf '%s\n' HELLO
```


### Looping With Numbers
Tags: #cmdline #shell #bash #numbers #looping #for
Links: [challenge](https://www.hackerrank.com/challenges/bash-tutorials---looping-with-numbers)

```shell
for (( i = 1; i <= 9; ++i ))
do
  echo "$i"
done
```


Or using ranges:

```shell-session
$ printf '%d\n' {1..50}
```


### Looping And Skipping
Tags: cmdline, numbers #looping #for
Links: [challenge](https://www.hackerrank.com/challenges/bash-tutorials---looping-and-skipping)

```shell
for (( i = 1; i <= 9; ++i ))
do
  if (( i % 2 == 0 ))
  then
    continue
  fi
  echo "$i"
done
```
```shell-session
$ bash script.sh
1
3
5
7
9
```


Could also use ''echo:''
```shell-session
$ echo -ne {1..9..2} '\n'
```


The `-e` option is to enable some escapes. `help echo` for more.

Or using `seq`:
```shell-session
$ seq -s ' ' 1 2 9
```


### A Personalized Echo
Tags: #cmdline #read #echo
Links: [challenge](https://www.hackerrank.com/challenges/bash-tutorials---a-personalized-echo)

```shell-session
$ read -r name
$ printf 'Welcome %s\n' "$name"
```


### The World of Numbers
Tags: #cmdline #shell #bash #numbers #math #bc #ranges
Links: [challenge](https://www.hackerrank.com/challenges/bash-tutorials---the-world-of-numbers)

First, see this clever use of range to produce the math expressions:

```shell-session
$ read -r x y
8 2

$ printf '%s\n' "$x"{+,-,*,/}"$y"
8+2
8-2
8*2
8/2
```

Then, feed those expressions to `bc`:

```shell-session
$ read -r x y
8 2

$ printf '%s\n' "scale=2; $x"{+,-,*,/}"$y" | bc
10
6
16
4.00
```

If `y` is _negative_, like `-2` we would receive an error:

```shell-session
$ read -r x y
5 -2

$ printf '%s\n' "scale=2; $x"{+,-,*,/}"$y" | bc
3
(standard_in) 2: syntax error
-10
-2.50
```

Adding parenthesis prevents the error, because our expression would be like `5--2`, but `5-(-2)` is OK with `bc`:

```shel-session
$ read -r x y
5 -2

$ printf '%s\n' "scale=2; $x"{+,-,*,/}"($y)" | bc
3
7
-10
-2.50
```

Or something more manual and verbose:

```shell
read x </dev/stdin
read y </dev/stdin

printf '%d\n' $(( x + y ))
printf '%d\n' $(( x - y ))
printf '%d\n' $(( x * y ))
printf '%d\n' $(( x / y ))
```

NOTE: The challenge wants integer division, so, we simply omit `bc`'s scale special variable.



```shell
read -r answer

case "$answer" in
  [Yy]*)
    printf '%s\n' YES
    ;;
  [Nn]*)
    printf '%s\n' NO
    ;;
  *)
    printf '%s\n' 'What the poop‽ 💩'
    ;;
esac
```

```shell-session
$ bash script.sh 
yes
YES

$ bash script.sh 
Y
YES

$ bash script.sh
n
NO

$ bash script.sh
lol
What the poop‽ 💩
```



 







## The End
