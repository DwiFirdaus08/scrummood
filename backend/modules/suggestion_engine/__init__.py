from flask import Blueprint
from backend.app import db

suggestion_bp = Blueprint('suggestion_engine', __name__)

from . import routes
