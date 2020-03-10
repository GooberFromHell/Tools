### Unix Survey Helper

!!! error CONSIDER THESE THINGS
#### Search for hidden directories
#### Don't be afraid to search the entire file system for something.
#### Don't focus on making over complicated commands to makes the output cleaner.
#### Don't forget to search the log files.
#### DO NOT ASSUME ANYTHING!
!!!

#### check file permissions for all directories leading to FileName.
```Shell
namei -l </Full/Path/To/The/file>
```


#### SSH logging from linux
```Shell
ssh <IpAddress> -u <UserName> | tee >(while read line; do echo "`date +'[%H:%M:%S]'` $line"; done >logfile)
```

#### get all user login times.
```Shell
for name in `getent passwd | awk '{split($0,a,":"); print(a[1])}'`; do last $name >> /tmp/logins.txt; done
```

#### Writes to the Master Boot Record on the boot device.
```Shell
echo -n L | dd of=/boot/grub/stage1 bs=1 seek=<OFFSET> conv=notrunc
```

#### Compare Boot directory files to the MBR.
```Shell
dd if=/dev/sda bs=512 count=1 | diff - /boot/grub/stage<StageNumber>
```

#### get all user login shells
```Shell
getent passwd | awk -F':' '{ print($1" - "$7) }'
```

#### display all processes cwd and _ environments. Good for find an executables actual running directory. (kinda buggy but still works)
```Shell
for i in $(find /proc -maxdepth 1 -type d); do echo "$i # `ls -a $i/cwd` # $(cat $i/environ | awk '{ split($0,a,"="); print(a[15]); }')"; done | grep '# /'
```

#### Solaris get process to port translation.
```Shell
pfiles `ls /proc` 2>/dev/null | awk "/^[^ \\t]/{smatch=\$0; next }/port:[ \\t]*${1}/{print smatch, \$0}{next}"
```
```Shell
for p in `ls /proc`; do args=$(pargs $p | grep $p:) && printf "$args \n $(pfiles $p | grep port:)" ; done | less
```
```Shell
find /proc/*/fd/ | xargs grep -sl port:
```

#### Solaris find port usage.
```Shell
ps -ef| awk '{print $2}'| xargs -I '{}' sh -c 'echo examining process {}; pfiles {}| grep <PortToFind>'
```

#### List all users cron jobs
```Shell
for user in `getent passwd | awk -F':' '{ print $1}'`; do crontab -u $user -l; done
```

#### List all /var/log files used my active processes.
```Shell
cd /proc; for pid in `find * -maxdepth 1 -type d -name "fd" -prune`; do ls -l /proc/$pid/. | grep /var/log && echo $pid" -------------Above this line--------------" ;  done;
```

#### List file created near the same time.
```Shell
find -type f -cnewer <FileToCompare> ! -newerct <OneDayLater> -ls
```