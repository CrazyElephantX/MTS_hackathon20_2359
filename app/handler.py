from aiogram import Router, F, Bot
from aiogram.types import Message, CallbackQuery, BotCommandScopeDefault
from aiogram.filters import CommandStart
from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext

from datetime import datetime as dt

import app.keyboard as kb

router = Router()


class Register(StatesGroup):
    id = State()
    username_tg = State()
    name = State()
    phone = State()


@router.message(CommandStart())
async def command_start_handler(message: Message, state: FSMContext, bot: Bot):
    await state.clear()
    # Разное ссобщение в зависимости наличия пользователя с id
    await message.answer("Привет, Я мини-игра от МТС! 👋\nСкорее давай играть!")
    await message.answer("Регистрируйся скорее!", reply_markup=kb.start_register)


@router.callback_query(F.data == 'start_register')
async def register_start_handler(callback: CallbackQuery, state: FSMContext):
    await state.set_state(Register.name)
    await callback.message.edit_reply_markup(reply_markup=None)
    await callback.message.answer("Введи свое имя")


@router.message(Register.name)
async def register_name(message: Message, state: FSMContext):
    await state.update_data(name=message.text)
    await state.update_data(id=message.from_user.id)
    await state.update_data(username_th=message.from_user.username)
    await state.set_state(Register.phone)
    await message.answer("Введи свое имя")


@router.message(Register.phone)
async def register_phone(message: Message, state: FSMContext):
    await state.update_data(phone=message.text)

    data = await state.get_data()

    await message.answer(f'Тебя зовут: {data['name']}\n'
                         f'Телефон: {data['phone']}',
                         reply_markup=kb.pass_register)


@router.callback_query(F.data == 'pass_register')
async def register_pass(callback: CallbackQuery, state: FSMContext, bot: Bot):
    today_now = dt.today().date()

    data = await state.get_data()

    # Записываем в бд
    # Развилка для реферальных и самостоятельный регов для разных сообщений
    await callback.message.answer("Ты успешно зарегестрирован! ⚡️\n",
                                      reply_markup=kb.main)
    await state.clear()


@router.callback_query(F.data == 'change_register')
async def register_change(callback: CallbackQuery, state: FSMContext):
    await state.set_state(Register.name)
    await callback.message.edit_reply_markup(reply_markup=None)
    await callback.message.answer("Введи твое имя")
