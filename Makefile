dev-up:
	sudo docker-compose -f docker-compose-dev.yml up

prod-up: # TODO: use detach
	sudo docker-compose -f docker-compose-prod.yml up

dev-down:
	sudo docker-compose -f docker-compose-dev.yml down

prod-down:
	sudo docker-compose -f docker-compose-prod.yml down
