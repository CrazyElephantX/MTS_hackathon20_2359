import logging

import asyncio
from aiogram import Bot, Dispatcher
from aiogram.types import BotCommand, BotCommandScopeDefault

from config.config import TOKEN

from app.handler import router
from app.profile import router_profile
from app.mts import router_mts
from app.notify import router_notify


from datetime import datetime as dt, timedelta

bot = Bot(token=TOKEN)
dp = Dispatcher()
dp.include_router(router)
dp.include_router(router_profile)
dp.include_router(router_mts)
dp.include_router(router_notify)


async def main():
    await dp.start_polling(bot)


if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Бот отключен")
