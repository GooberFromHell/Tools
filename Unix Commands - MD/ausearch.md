### ausearch

#### find user accoutn creation dates and times
```Shell
ausearch -x useradd -i 
```
```Shell
aureport -m | grep <UserName>
```

#### find when a user ran a particular command.
```Shell
ausearch -m USER_START -x <Command> -ts DD/MM/YYYY HH:MM:SS | grep <UserName>
```