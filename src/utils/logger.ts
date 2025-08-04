import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

const consoleFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(
    ({ timestamp, level, message, stack }) =>
      `${timestamp} [${level}]: ${message}${stack ? `\n${stack}` : ''}`
  )
);

const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json(),
  winston.format.errors({ stack: true })
);

const transports = [
  new winston.transports.Console({
    format: consoleFormat,
    level: 'debug'
  }),
  new DailyRotateFile({
    filename: 'logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    format: fileFormat,
    level: 'info'
  })
];

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  transports,
  exitOnError: false,
  exceptionHandlers: [
    new DailyRotateFile({
      filename: 'logs/exceptions-%DATE%.log',
      datePattern: 'YYYY-MM-DD'
    })
  ]
});

export const httpLogStream = {
  write: (message: string) => logger.http(message.trim())
};

export default logger;