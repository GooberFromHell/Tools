Initial access is defined as being abble to touch the machine.
sshd: user [priv] - first process spawned from sshd when a user touches.

Is not facility is provided in syslog or rsyslog conf, they entry is only a severity. making it invalid.


facl mask is grantee
iptabes
system services
reggex =~ id partial match

File permissions:
	- umask for created files:
		0) /etc/login.defs
		1) /etc/bashrc
		2) /etc/profile
		3) ~/.bashrc
		4) ~/.bash_profile
		5) ~/.cshrc (for csh)
		6) ~/.zshrc (for zsh)
		7) etc...
	- SUID and GUID:
		1) Capitol "S" means there is NO execution bit set.
	- Access a file
		1) To access(read it) a file in a directory:
			Containing Directory: Must have execute.
			File: Must have read.

Malicious Processes:
	- Check:
		1) cronjobs for all users: for user in `getent passwd | awk -F':' '{ print $1}'`; do crontab -u $user -l; done
		2) netstat -pantu
		3) ps -elf
		4) Anything running form /tmp or /home, look into.
		4) Look at processes cmd and environ: for i in $(find /proc -maxdepth 1 -type d); do echo "$i # `ls -a $i/cwd` # $(cat $i/environ | awk '{ split($0,a,"="); print(a[15]); }')"; done | grep '# /'


Possible list of DEFAULT init methods (Could still be different on a system:
	ArchLinux:			 		systemd (since 2012.10.06)
	CentOS6.4:					upstart
	CentOS7:					systemd
	Debian 6:					sysv-init
	Debian 7.5:					sysv-init
	Debian 7.6:					sysv-init
	Debian 8:					systemd
	RHEL 6.5:					upstart
	RHEL 6.5:					systemd
	SLES 11:					sysv-init
	Ubuntu 10.04:				upstart
	Ubuntu 12.04:				upstart
	Ubuntu 14.04:				upstart
	Ubuntu <= 14.10:			systemd	
	AWS linux 2014.3.2:			upstart
	Fedora 19:					systemd
	Fedora 20:					systemd
