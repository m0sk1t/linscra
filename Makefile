dev-target:
	sudo docker-compose -f docker-compose-dev.yml up

prod-target:
	sudo docker-compose -f docker-compose-prod.yml up -d
