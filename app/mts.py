from aiogram import Router, F, Bot
from aiogram.types import Message, CallbackQuery, BotCommandScopeDefault
from aiogram.filters import CommandStart
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext

from datetime import datetime as dt

import app.keyboard as kb

router_mts = Router()


@router_mts.message(F.text == 'Мой МТС')
async def profile(message: Message, bot: Bot, state: FSMContext):
    await state.clear()

    await message.answer("Тут ты найдешь много интересного.")