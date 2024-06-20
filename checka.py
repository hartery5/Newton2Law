import numpy as np

if __name__=='__main__':
    M1 = np.arange(500,775,25)
    M2 = np.arange(10,60,10)
    U = np.arange(0,0.11,0.01)


    mina = 2.0
    for m1 in M1:
        for m2 in M2:
            for u in U:
                if (m2>u*m1):

                    a = 9.8*(m2-m1*u)/(m2+m1)

                    if a<mina:
                        b = [m1,m2,u]
                        mina = a
    print(mina,b)
