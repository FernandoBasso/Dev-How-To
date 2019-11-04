# pylint: disable=all

def Settings( **kwargs ):
  return {
      'flags': [
        '-x',
        'c',
        '-std',
        'c99',
        '-Wall',
        '-Wextra',
        '-Werror',
        '-pedantic',
        ],
      }

# vim: set shiftwidth=2 expandtab softtabstop=2:

