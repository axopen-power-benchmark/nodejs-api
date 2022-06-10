### Développement

``npm start``

### Production

``node server.js``

### Jmeter 

``jmeter.sh -n -t POWER_BENCHMARK.jmx -JthreadCount=10 -JtimerDelayOffset=500 -JtimerDeviation=300 -JpostCount=2 -JgetCount=8``

- `threadCount` nombre de threads simultanés (default 10)
- `timerDelayOffset` Constant delay offset du timer gaussien, c'est la valeur moyenne (ms, default 500)
- `timerDeviation` deviation du timer gaussien, c'est les variations par rapport au delay offer (ms, default 300)
- `postCount` nombre de POST par thread (default 2)
- `getCount` nombre de GET par thread (default 8)

##### Exemple des parametres du timer :

si `timerDelayOffset = 500` et `timerDeviation = 300`, le delay va varier 68% du temps entre 200 et 800. 
