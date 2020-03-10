### SMF - svcs

#### Display servcie status.
```Shell
svcs <ServiceName>
```

#### Display a service's dependencies.
```Shell
svcs -d <ServiceName>
```
		
#### Display current milestone. 
##### - It will be the one with the most current STIME.
```Shell
svcs milestone*
```

#### Dsplay all online services.
```Shell
svcs -a | grep online
```