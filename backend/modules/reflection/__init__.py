from flask import Blueprint
from backend.app import db

reflection_bp = Blueprint('reflection', __name__)

from . import routes
