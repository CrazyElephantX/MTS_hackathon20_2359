from aiogram import Router, F, Bot
from aiogram.types import Message, CallbackQuery, BotCommandScopeDefault
from aiogram.filters import CommandStart
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton

from datetime import datetime as dt

import app.keyboard as kb

router_notify = Router()


@router_notify.message(F.text == 'Оповещения и Акции')
async def profile(message: Message, bot: Bot, state: FSMContext):
    await state.clear()

    notify = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="Рассылка акций - 100 монет", callback_data='notify_ac')],
        [InlineKeyboardButton(text="Рассылка новостей - 150 монет", callback_data='notify_news')],
        [InlineKeyboardButton(text="Уведомления приложения - 10 монет", callback_data='notify')]])

    await message.answer("Подпишись на рассылку и получи уникальный скин.\n"
                         "Не забудь про акции, там часто купоны на бесплатные дни сервиса.",
                         reply_markup=notify)
