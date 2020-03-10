### sed
#### Replace exact string in file.
```Shell
sed -i 's/\<StringToFind\>/StringReplaceWith/g' <PathToFile>
```

#### Comment lines that contain TEXT.
```Shell
sed -i '/<pattern>/s/^/#/g' file
```

#### Uncomment lines that contain TEXT.
```Shell
sed -i '/<pattern>/s/^#//g' file
```
