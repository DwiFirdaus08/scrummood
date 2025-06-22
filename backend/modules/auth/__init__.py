from flask import Blueprint
from backend.app import db

auth_bp = Blueprint('auth', __name__)

from . import routes
