compile:
	tsc  
run:
	node dist/main.js 
main: 
	make compile && make run 