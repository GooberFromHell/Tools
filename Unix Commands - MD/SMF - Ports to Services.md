### SMF - Ports to Services
```shell
 for i in `ls /proc`; do
 
    proto=""
    pid=$i
    ls=`ls -l /proc/$pid/path/a.out | awk '{print $11}'`
   
    pfiles $i 2> /dev/null | /usr/xpg4/bin/grep "sockname" /dev/null
    
    if [ $? -eq 0 ]; then
    for port in `pfiles $i | /usr/xpg4/bin/grep -E "port: [0-9]{1,5}" 2>/dev/null | tr ": " "\n" | /usr/xpg4/bin/grep -E "([0-9]{1,5}$)" 2>/dev/null`; do
    echo "\t\tPORT: $port"
    done

    echo "$ls - PID: $i"

    fi
done
```


