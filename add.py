import time
import os,sys
for i in range(30):
        f = open("data.json","r+") 
        s = '{"tempurature":36.5,"shidu":'+str(i)+'}'
        print(s)
        time.sleep(1)
        f.write(s)
        
        f.flush()
        os.fsync(f)
        sys.stdout.flush()
        f.close()