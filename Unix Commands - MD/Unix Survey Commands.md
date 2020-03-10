unset HISTFILE
w
date -u
date
id
uname -a
cat /proc/version
hostname
sestatus
ps -ef --sort start_time or ps -elf --sort start_time or ps auxwww
ifconfig -a
netstat -natup (as root)
arp -v
df -h 
df -i
ls -latrd /etc/cron*
ls -latr /var/spool/cron /var/spool/at
ls -latr /root
ls -latr /home
ls -latr /home/*
ls -latr /export/home
ls -latr /export/home/*
ls -latr /root/.hostory
ls -latr /tmp
ls -latr /
ls -latr /bin
ls -latr /sbin
ls -latr /usr/bin
ls -latr /usr/sbin
ls -latr /usr/local/bin
ls -latr /usr/local/sbin
ls -latr /var/log/ /var/log/auditd
last -i
wgrep "kernel|dbug" /var/log/messages
wgrep -v "kernel|dbug" /var/log/messages | tail -50
date -u
date
