 if exists boostnote.json (
 	   echo "boostnote.json file located"
       )else (
 	   echo "This should be run from the Boostnote directory, the one with the boostnote.json files, in the same directory as ./notes and ./attachments"
 	   exit 0
	   )
run python -v
 if %ERRORLEVEL% EQ 0 (
 	   echo ""
        ) else (
 	   echo "Aborting, require Python 3 in path"
        exit
		)


 ### Code
   ## Convert the Files using the python script
 C:\Users\GooberFromHell\AppData\Local\Microsoft\WindowsApps\python3.exe boost2md.py --source ./ --output ./MDConversion/
   ## Change into the directory containing those files
 cd /D MDConversion/
   ## Change into each Directory, change storage to attachments and leave
 for i in dir do
     cd /D %i
     for file in ('dir')
		cp storage attachments
		exit
     cd ..

 mkdir notes
 cp (find ./ -name \*md) ./notes


 echo "All files converted to MD and redirected to attachments, copied into a notes directory to match Notable"