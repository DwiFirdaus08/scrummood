from flask import Blueprint
from backend.app import db

emotion_bp = Blueprint('emotion_monitor', __name__)

from . import routes
