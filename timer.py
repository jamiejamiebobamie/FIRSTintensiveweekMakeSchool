import datetime

milli = 108585648

milliD = 86400000
milliH = 3600000
milliM = 60000
milliS = 1000


def returnDays(milli):
    #milliD = 86400000
    if milli > milliD:
        days = milli // milliD
        return days
    else:
        return 0

def returnHours(milli):
    #milliH = 3600000
    if milli > milliH:
        hours = milli // milliH
        return hours
    else:
        return 0

def returnMin(milli):
    #milliM = 60000
    if milli > milliM:
        minutes = milli // milliM
        return minutes
    else:
        return 0

def returnSec(milli):
    #milliS = 1000
    if milli > milliS:
        seconds = milli // milliS
        return seconds
    else:
        return 0


d = returnDays(milli)
h = returnHours(milli - (d * milliD))
m = returnMin(milli - (d * milliD)-(h * milliH))
s = returnSec(milli - (d * milliD)-(h * milliH)-(m * milliM))
milli = milli - (d * milliD)-(h * milliH)-(m * milliM)-(s*milliS)


def printTimer(d,h,m,s,milli):
    print("" + str(d) + " : " + str(h) + " : " + str(m) + " : " + str(s) + " : " + str(milli))

printTimer(d,h,m,s,milli)



#time timedelta
#
#d = timedelta(microseconds=-1)
#(d.days, d.seconds, d.microseconds)

d= datetime.time

d.seconds
