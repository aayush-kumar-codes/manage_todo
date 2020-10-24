# manage_todo

* How to setup Backend.
* step 1-> clone repo.
* step 2-> create virtualenv in dir /backend "virtualenv -p python3 env"
* step 3-> go into management dir and install requirements "pip install -r requirements.txt"
* step 4-> change DB settings in backend/management/management/settings.py
* step 5-> go into directory backend/management .
* step 6-> run "python manage.py makemigrations"
* step 7-> run "python manage.py migrate"
* step 8-> run "python manage.py runserver"