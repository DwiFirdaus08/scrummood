from backend.models.user import User
from backend.models.chat import ChatMessage
from backend.models.session import Session
from backend.app import db
from flask import Blueprint

chat_bp = Blueprint('chat', __name__)

# ...existing code...