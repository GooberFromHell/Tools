# Unix Survey Commands
<!-- toc -->

- [General Commands](#General-Commands)
    + [unset HISTFILE](#unset-HISTFILE)
    + [Check cron jobs](#Check-cron-jobs)
    + [Check for at jobs](#Check-for-at-jobs)
    + [Login Shells](#Login-Shells)
    + [Check /etc/profile, ~/.bash_profile, ~/.bashrc, ~/.bash_login, ~/.bash_logout, and /etc/login](#Check-etcprofile-bash_profile-bashrc-bash_login-bash_logout-and-etclogin)
    + [Dump superblock on device mounts](#Dump-superblock-on-device-mounts)
    + [Check for masked directories/files that have been mounted over.](#Check-for-masked-directoriesfiles-that-have-been-mounted-over)
    + [Check /var/tmp for any files trying to survive reboots](#Check-vartmp-for-any-files-trying-to-survive-reboots)
    + [Look at the linked rc scripts of the current run level. Should be to somthing in /etc/rc.d/init.d](#Look-at-the-linked-rc-scripts-of-the-current-run-level-Should-be-to-somthing-in-etcrcdinitd)
    + [Same as above but for all rc.d directories/runlevels](#Same-as-above-but-for-all-rcd-directoriesrunlevels)
    + [Check shells with setuid or setgid for privescalation.](#Check-shells-with-setuid-or-setgid-for-privescalation)
    + [Check xinet.d services](#Check-xinetd-services)
    + [Might help find some bad stuff NOT ALL INCLUSIVE!](#Might-help-find-some-bad-stuff-NOT-ALL-INCLUSIVE)
    + [Files with custom logging facilities:](#Files-with-custom-logging-facilities)
    + [Find installed packages on system.](#Find-installed-packages-on-system)
    + [Checking nsswitch.conf lib files for back strings:](#Checking-nsswitchconf-lib-files-for-back-strings)
    + [Finding a spesfic users creation date based on time](#Finding-a-spesfic-users-creation-date-based-on-time)
    + [Netstat with users and process IDs](#Netstat-with-users-and-process-IDs)
- [Log Filtering](#Log-Filtering)
    + [Filtering kernel and dbug messsages from logs (remove alot of unesssary entries)](#Filtering-kernel-and-dbug-messsages-from-logs-remove-alot-of-unesssary-entries)

<!-- tocstop -->


### General Commands

##### unset HISTFILE

```Shell
unset HISTFILE
```

##### Check cron jobs
```Shell
for user in $(cut -f1 -d: /etc/passwd); do echo $user ; crontab -u $user -l; done;
```

##### Check for at jobs
1. Look at at files in /var/spool/at or /etc/at.allow or /etc/at.deny
```Shell
at
```

##### Login Shells

```Shell
ps -elf | tr -s " " | cut -d " " -f 3,4,5,13,15- | grep -
```

##### Check /etc/profile, ~/.bash_profile, ~/.bashrc, ~/.bash_login, ~/.bash_logout, and /etc/login

##### Dump superblock on device mounts

```Shell
dumpe2fs <FullPathToDevicePartition>  (dumpe2fs /dev/sda1)
```

##### Check for masked directories/files that have been mounted over.

```Shell
mount (look for any oddy names mount points)
```

##### Check /var/tmp for any files trying to survive reboots

```shell
ls -la /var/tmp
```

##### Look at the linked rc scripts of the current run level. Should be to somthing in /etc/rc.d/init.d

```Shell
ls -la /etc/rc.d/rc$(runlevel | cut -d' ' -f2).d | grep -v init\.d
```

##### Same as above but for all rc.d directories/runlevels

```Shell
find -l /etc/rc.d -type l -ls | grep -v init\.d
```

##### Check shells with setuid or setgid for privescalation.

##### Check xinet.d services

```Shell
grep disable /etc/xinetd.d/*|grep no
```

##### Might help find some bad stuff NOT ALL INCLUSIVE!

```Shell
find <BinaryDirectory> -type f -exec rpm -q --whatprovides \{\} \; | grep "owned"
```

##### Files with custom logging facilities:

```Shell
find /etc -type f -exec grep -H SyslogFacility \{\} \;
```

##### Find installed packages on system.

```Shell
grep -i install /var/log/{rpm*,yum*}
```

##### Checking nsswitch.conf lib files for back strings:

```Shell
strings /lib/libnss_* 2>/dev/null| grep /etc
```

##### Finding a spesfic users creation date based on time

```Shell
ausearch -x useradd -i | grep "MM/DD/YYYY HH:MM:SS"
```

##### Netstat with users and process IDs
```Shell
netstat -pantuev
```

### Log Filtering
##### Filtering kernel and dbug messsages from logs (remove alot of unesssary entries)
```Shell
grep -v "kernel|dbus" /var/log/messages
```
