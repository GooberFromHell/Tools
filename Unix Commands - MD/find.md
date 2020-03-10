### find 
#### Display all symlinks in a directory recursively.
```Shell
find . -type l -ls
```

#### Display all syslinks in a single directory .
```Shell
find . -maxdepth 1 -type l -ls
```

#### Search the entire system for somthing.
```Shell
find / -name <filename>
```

#### Search for files and run a command on each one.
```Shell
find <directory> -name <FileName>.<Extension> -exec <CommnadToRun> \{\} \;
```
