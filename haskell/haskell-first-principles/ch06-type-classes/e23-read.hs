--
-- Read, p 200.
--

--
-- DANGER
--
-- Show turns things into strings, Read turns strings into things. Like Show,
-- it is not a serialization format.
--
--    λ> read "1234" :: Integer
--    1234
--    λ> read "shit..." :: Integer
--    *** Exception: Prelude.read: no parse
--
-- THAT EXCEPTION IS A RUNTIME ERROR AND MEANS READ IS A PARTIAL FUNCTION. A
-- function that DOES NOT return a proper value as result for ALL POSSIBLE
-- INPUTS.
--
