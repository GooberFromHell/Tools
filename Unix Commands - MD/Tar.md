#### Created a archive file for all file in a directory with directory structure.
tar -cf /<FullPathToTarFile>.tar /Path/To/Directory

#### Created a archive file for all file in a directory WITHOUT directory structure.
tar -cf /<FullPathToTarFile>.tar -C /Path/To/Direcotry .

#### Extract the nth file in a Tar
tar -xf <TarFileName>.tar 'tar -tf <TarFileName>.tar | head -n <FileIndexToExtract> | tail -n 1'