#### SMF - Find Milestone
##### <p> - If it errors, the milestone is not set using svcadm and<br>The default milestone is multi-user-server.<p>
```Shell
svcprop svc:/system/svc/restarter:default/:properties/options/milestone
```