# install virtual env
python -m venv venv

# activate venv
./venv/Scripts/activate
# install requirements
pip install -r requirements.rxt
# run server
python manage.py runserver
# rebundle frontend
cd frontend
npm run dev
