### Init Characteristics
<!-- toc -->

- [Sysv](#Sysv)
  * [MAN Page Entry:](#MAN-Page-Entry)
  * [Configuration Tools:](#Configuration-Tools)
- [Upstart](#Upstart)
  * [MAN Page Entry:](#MAN-Page-Entry-1)
  * [Identifiers](#Identifiers)
  * [Configuration Tools](#Configuration-Tools-1)
  * [Checking Boot Services:](#Checking-Boot-Services)
- [systemd](#systemd)
  * [MAN Page Entry](#MAN-Page-Entry-2)
  * [Identifiers](#Identifiers-1)
  * [Configuration Tools](#Configuration-Tools-2)
- [SMF](#SMF)
- [MAN Page Entry](#MAN-Page-Entry-3)
  * [Debian](#Debian)
  * [FreeBSD](#FreeBSD)

<!-- tocstop -->

### Sysv
| File                 | Info                                                                            |
| :-------------------- |:------------------------------------------------------------------------------- |
| /etc/rc.d            |                                                                                 |
| /etc/rc.d/rc.sysinit | Configuration script run before other services, mounts file system, etc..     |
| /etc/rc.d/rc.local   | Cconfiguration script run after services. Custom scripts, vpns, tunnels, etc.. |
| /etc/inittab         |                                                                                 | 

#### MAN Page Entry: 
```
    INIT(8) Linux System Administrator’s Manual INIT(8)

    NAME
    init, telinit – process control initialization
```
			
#### Configuration Tools:
 1. service
 2. chkconfig
 3. runlevel
 4. who-r
 5. Boot services:
 6. chkconfig --list

### Upstart
| File                               | Info |
|:---------------------------------- |:---- |
| /etc/rc                            |      |
| /etc/inittab (might not have this) |  Might not be present on system  |
| /etc/init/                         |      |

#### MAN Page Entry:
```
    init(8) System Manager’s Manual init(8)

    NAME
    init – Upstart process management daemon
```
#### Identifiers
    1. PID 1 -> /sbin/init
    2. /etc/init/rc-sysinit.conf -> controls default runlevel (grep "env.*DEFAULT_RUNLEVEL" /etc/init/rc-sysinit.conf)
    
#### Configuration Tools
1. updte-rc.d 
2. initctl
3. services
		
#### Checking Boot Services:
initctl show-config
initctl status <ServiceName>
initctl 
MAN PAGE: 

### systemd
| File                    | Info                                                                                                                            |
|:----------------------- |:------------------------------------------------------------------------------------------------------------------------------- |
| /etc/rc                 | Leacy rc scripts                                                                                                                |
| /etc/systemd/system     | - systemd main configuration directory<br>- Most files are links to the actual files in:<br><BLOCKQUOTE>/usr/lib/systemd/system</BLOCKQUOTE> |
| /usr/lib/systemd/system | systemd location for configuration file storage                                                                                 |

#### MAN Page Entry
```
    SYSTEMD(1) systemd SYSTEMD(1)
    
    NAME
    systemd, init – systemd system and service manager
```
#### Identifiers
    1. PID 1 -> /usr/lib/systemd/systemd or linked /sbin/init/ -> /usr/lib/systemd/systemd

#### Configuration Tools
| Tool      | Purpose                                          |
|:--------- |:------------------------------------------------ |
| systemctl | 1.All in one command for pretty much everything. |


### SMF

### MAN Page Entry
```
    System Administration Commands init(1M)
    
    NAME
    init, telinit – process control initilization
```
			
#### Debian
configuration tools used:
update-rc.d
		
network configuration stored in:
		/etc/network
#### FreeBSD
network configuration stored in:
		/etc/rc.conf
