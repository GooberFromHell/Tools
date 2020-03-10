#### Search for object using the CN, can use wild cards *.
	dsquery <OjectType> -name "<CN>" 
	
#### Get members of the Domain Admins group.
	dsquery group -name "domain admins" | dsget group -members
	
#### Get list of opperating systems in the domain.
	dsquery * -attr operatingSystem operatingSystemServicePack -filter "(|(operatingSystem=*))"
	
#### Add user to group in active Directory.
	dsquery group -name "managers" | dsmod group -addmbr "cn=bob carpenter,cn=users,dc=corp,dc=skyriver,dc=com"
	
#### Remove user from Actice Directory.
	dsquery user -name "<Name_To_Find>" | dsrm -subtree -noprompt -c
	
#### Add user to Active Directory.
	dsadd user "CN=xxx xxx,CN=users,DC=corp,DC=skyriver,DC=com" -samid xxx -upn xxx@ops.local -fn "xxx" -ln "xxx" -display "xxx xxx" -pwd xxx -desc "xxxx" -disabled no
	
	