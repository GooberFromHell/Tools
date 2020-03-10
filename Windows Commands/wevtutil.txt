#### List events from security log most recent to latest
	wevtutil qe security /c:3 /rd:true

#### List events form the security long looking for eventid 4625 from user administrator
	wevtutil qe security /rd:true /q:"*[System/EventID=4624] and *[EventData/Data[@Name='TargetUserName']='Administrator']"

#### List events from application log form Skype
	wevtutil qe application | findstr /I "Skype" | more
	
#### get log configuration information.
	wevtUtil gl "<LogName>"
	
#### Search for event within a date range:
	wevtutil qe security "/q:*[System/EventID=4720] and *[System[TimeCreated[@SystemTime>='2019-12-23T00:00:00' and @SystemTime<='2019-12-31T00:00:00']]]"
	
	wevtutil qe security "/q:*[System[TimeCreated[@SystemTime>='2019-12-23T00:00:00' and @SystemTime<='2017-01-01T00:00:00']]]"

#### Another Way to search for successful logins
	wevtutil qe security /q:"*/*[*[@*='TargetUsername']='Administrator'] and */*[EventID=4624]"
	
#### any element equals.
	*/*[EventID=4624]
	
#### Any Attribute equals.
	*/*[*[@*='TargetUsername']='Administrator']
	
get-eventlog security | where {$_.eventid -eq <EventID> -and $_.message -like '*<UserName>*'}


wevtutil qe security "/q:*[System[TimeCreated[@SystemTime>='2019-12-23T00:00:00' and @SystemTime<='2017-01-01T00:00:00']]]"