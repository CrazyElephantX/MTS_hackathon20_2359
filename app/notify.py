from aiogram import Router, F, Bot
from aiogram.types import Message, CallbackQuery, BotCommandScopeDefault
from aiogram.filters import CommandStart
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext
from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton

from datetime import datetime as dt
from database.db import Database

import app.keyboard as kb

router_notify = Router()
database = Database('None')


@router_notify.message(F.text == 'Оповещения и Акции')
async def profile(message: Message, bot: Bot, state: FSMContext):
    await state.clear()

    is_sub = database.get_notify(message.from_user.id)[0][0]

    notify = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text=f'Рассылка - 🚫' if not is_sub else 'Рассылка - ✅', callback_data='notify_ac')]])

    await message.answer("Подпишись на рассылку и получи уникальный скин.\n"
                         "Не забудь про акции, там часто купоны на бесплатные дни сервиса.",
                         reply_markup=notify)


@router_notify.callback_query(F.data == 'notify_ac')
async def register_change(callback: CallbackQuery, state: FSMContext):

    is_sub = database.get_notify(callback.from_user.id)[0][0]

    notify = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text=f'Рассылка - 🚫' if is_sub else 'Рассылка - ✅', callback_data='notify_ac')]])

    await callback.message.edit_reply_markup(
        reply_markup=notify
    )

    database.new_notify(callback.from_user.id, not is_sub)

    await callback.message.answer("Статус рассылки изменен")


