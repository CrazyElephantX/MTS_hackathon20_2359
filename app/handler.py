from aiogram import Router, F, Bot
from aiogram.types import Message, CallbackQuery, BotCommandScopeDefault
from aiogram.filters import CommandStart
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext

from datetime import datetime as dt

router = Router()


@router.message(CommandStart())
async def command_start_handler(message: Message, state: FSMContext, bot: Bot):
    await state.clear()
    await message.answer("Привет, Я мини-игра от МТС! 👋\nСкорее давай играть!")
