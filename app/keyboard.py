from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton
from aiogram.types.web_app_info import WebAppInfo


main = ReplyKeyboardMarkup(keyboard=[[KeyboardButton(text='Запустить игру')]],
                           resize_keyboard=True,
                           input_field_placeholder='Выбери раздел нижу...')

start_register = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text="🆔 Зарегестрироваться 🆔", callback_data='start_register')]])

pass_register = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text="Все верно ✅", callback_data='pass_register')],
    [InlineKeyboardButton(text="Изменить данные 🔄", callback_data='change_register')]])
