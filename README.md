# Naming convention

<ul>
  <li id="camel-case">Camel Case ------> <code>camelCase</code></li>
  <li id="pascal-case">Pascal Case ------> <code>PascalCase</code></li>
  <li id="kebab-case">Kebab Case ------> <code>kebab-case</code></li>
  <li id="snake-case">Snake Case ------> <code>SNAKE_CASE/snake_case</code></li>
</ul>

## 1. Folder

- **pages**: <a href="#pascal-case">PascalCase</a>
- **components**: <a href="#pascal-case">PascalCase</a>
- **others**: <a href="#pascal-case">kebab-case</a>

## 2. File

- **asset icons**: <a href="#pascal-case">PascalCase</a>
- **hooks**: <a href="#camel-case">camelCase</a>
- **others**: <a href="#kebab-case">kebab-case</a>

## 3. Model

- **interface**: <a href="#pascal-case">PascalCase</a>
- **type**: <a href="#pascal-case">PascalCase</a>
- **enum**: <a href="#pascal-case">PascalCase</a>

## 4. Variable

- **primitive**: <a href="#snake-case">SNAKE_CASE</a>
- **object, array,...**: <a href="#camel-case">camelCase</a>

# Structure in file

1. useState()
2. Some variables like params,...
3. Methods
4. useEffect()
5. useMemo() ----> If it uses functions inside

   ```
   Ex:
      const Component = () => {
        const calculate = () => {};

        ...

        const result = useMemo(() => {
          return calculate();
        }, []);

        return <div>{result}</div>
      };
   ```
