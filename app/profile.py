from aiogram import Router, F, Bot
from aiogram.types import Message, CallbackQuery, BotCommandScopeDefault
from aiogram.filters import CommandStart
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext

from datetime import datetime as dt

import app.keyboard as kb

router_profile = Router()


@router_profile.message(F.text == 'Профиль')
async def profile(message: Message, bot: Bot, state: FSMContext):
    await state.clear()

    # переменные

    # Строка на вывод

    # Формирование кнопок профиля

    profile_message = ' . '
    await message.answer("profile_message")
